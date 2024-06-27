import { useRef, useState } from 'react'

const Tabs = () => {
  const webviews = [
    useRef<HTMLWebViewElement>(null),
    useRef<HTMLWebViewElement>(null),
    useRef<HTMLWebViewElement>(null)
  ]
  const [activeTab, setActiveTab] = useState<number>(1)

  const urls = [
    'https://mail.google.com/mail/?authuser=0',
    'https://mail.google.com/mail/?authuser=1',
    'https://mail.google.com/mail/?authuser=2'
  ]

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: '16px', border: '1px solid #f73' }}
    >
      <div>
        {webviews.map((_, index) => (
          <button type="button" key={index} onClick={() => setActiveTab(index + 1)}>
            Tab {index + 1}
          </button>
        ))}

        <button type="button" onClick={() => webviews[activeTab - 1].current?.reload()}>
          Refresh Current Tab
        </button>
      </div>

      <div style={{ display: 'flex', gap: '16px', width: '100vw', height: '100vh' }}>
        {webviews.map((webview, index) => (
          <webview
            key={index}
            ref={webview}
            src={urls[index]}
            webpreferences="contextIsolation=true, sandbox=true, nodeIntegration=false"
            preload="../preload/index.ts"
            style={{ width: '100%', height: '100%', display: activeTab === index + 1 ? 'flex' : 'none' }}
            partition={`persist:user${index + 1}`}
          ></webview>
        ))}
      </div>
    </div>
  )
}

export default Tabs
