type OnLoadedCallback = () => void

export function addScript (
  src: string, 
  onLoaded: OnLoadedCallback, 
  onAlreadyLoaded: OnLoadedCallback|null = null
) {
  if (!alreadyLoaded(src)) {
    loadScript(src, onLoaded)
  } else {
    if (onAlreadyLoaded == null) {
      onAlreadyLoaded = onLoaded
    }

    onAlreadyLoaded()
  }
}

function loadScript (src: string, onLoaded: OnLoadedCallback) {
  const script = document.createElement('script')

  script.onload = () => {
    onLoaded()
  }

  script.setAttribute('src', src)
  script.async = true
  document.head.appendChild(script)
}

function alreadyLoaded (src: string) {
  const scripts = document.querySelectorAll('script')
  let alreadyLoaded = false

  scripts.forEach(element => {
    if (element.src === src) {
      alreadyLoaded = true
    }
  })

  return alreadyLoaded
}

export default {
  addScript
}
