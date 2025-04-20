import karin, { segment } from 'node-karin'
// ---cut-before---
karin.button(
  'confirm-button',
  async (next, e) => {
    e?.e?.reply('你点击了按钮')
    return segment.button({ admin: true, text: '确认' })
  },
  { log: true, priority: 100 }
)