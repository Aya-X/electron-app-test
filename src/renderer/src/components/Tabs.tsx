import { useEffect, useRef, useState } from 'react';

const Tabs = () => {
    const webview1 = useRef<HTMLWebViewElement>(null);
    const webview2 = useRef<HTMLWebViewElement>(null);
    const webview3 = useRef<HTMLWebViewElement>(null);

    const [activeTab, setActiveTab] = useState<number>(1);  

    useEffect(() => {
        const urls = [
            "https://mail.google.com/mail/?authuser=0",
            "https://mail.google.com/mail/?authuser=1",
            "https://mail.google.com/mail/?authuser=2"
        ];

        if (webview1.current) webview1.current.setAttribute('src', urls[0]);
        if (webview2.current) webview2.current.setAttribute('src', urls[1]);
        if (webview3.current) webview3.current.setAttribute('src', urls[2]);
    }, [activeTab]);

    // const checkCookies = (webviewRef) => {
    //     if (webviewRef.current) {
    //         webviewRef.current.executeJavaScript('document.cookie').then((cookies: string) => {
    //             console.log(cookies || +new Date());
    //         }).catch((error: Error) => {
    //             console.error('Error executing JavaScript:', error);
    //         });
    //     }
    // };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', border: '1px solid #f73' }}>
            <div>
                <button onClick={() => setActiveTab(1)}>Tab 1</button>
                <button onClick={() => setActiveTab(2)}>Tab 2</button>
                <button onClick={() => setActiveTab(3)}>Tab 3</button>
            </div>
            <div style={{ display: 'flex', gap: '16px' }}>
                <p>activeTab: {activeTab}</p>
                {activeTab === 1 && <webview ref={webview1} webpreferences="contextIsolation=true, sandbox=true, nodeIntegration=false" preload="../preload/index.ts" style={{ width: '100%', height: '500px' }} partition="temp1"></webview>}
                {activeTab === 2 && <webview ref={webview2} webpreferences="contextIsolation=true, sandbox=true, nodeIntegration=false" preload="../preload/index.ts" style={{ width: '100%', height: '500px' }} partition="temp2"></webview>}
                {activeTab === 3 && <webview ref={webview3} webpreferences="contextIsolation=true, sandbox=true, nodeIntegration=false" preload="../preload/index.ts" style={{ width: '100%', height: '500px' }} partition="temp3"></webview>}
            </div>
        </div>
    );
};

export default Tabs;