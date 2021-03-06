import { PlaygroundPlugin, PluginFactory } from '..'
import { localize } from '../localizeWithFallback'

export const showDTSPlugin: PluginFactory = i => {
  let codeElement: HTMLElement

  const plugin: PlaygroundPlugin = {
    id: 'dts',
    displayName: i('play_sidebar_dts'),
    willMount: (sandbox, container) => {
      // TODO: Monaco?
      const createCodePre = document.createElement('pre')
      codeElement = document.createElement('code')

      createCodePre.appendChild(codeElement)
      container.appendChild(createCodePre)
    },
    modelChanged: (sandbox, model) => {
      sandbox.getDTSForCode().then(dts => {
        sandbox.monaco.editor.colorize(dts, 'typescript', {}).then(coloredDTS => {
          codeElement.innerHTML = coloredDTS
        })
      })
    },
  }

  return plugin
}
