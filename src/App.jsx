import './App.css'
import { useState , useEffect } from 'react'
import Config from './components/Config/Config'
import Menu from './components/Menu/Menu'
import PlayMenu from './components/PlayMenu/PlayMenu'

export const App = () => {
  //Se usa un useEffect y un useState para cambiar los datos del idioma en tiempo real
  const [lang, setLang] = useState(null)

  const [screen, setScreen] = useState({
    'config': false,
    'menu': true,
    'play': false
  })

  const handlerScreen = (element, value) => {
    setScreen(prev => ({
      ...prev, [element] : value
    }))
  }

  useEffect(() => {
    //Se obtiene la info del lenguaje del navegador para determinar el lenguaje de la app
    (async () => {
      try {
        let lang = localStorage.getItem('lang')
    
        if (lang === null) {
          localStorage.setItem('lang', navigator.language.slice(0, 2))
          lang = localStorage.getItem('lang')
        }

        //Se obtiene el archivo lang con la info del lenguaje seleccionado
        try { setLang(await (await fetch(`./src/assets/Lang/${lang}.lang`)).json()) }
        catch {
          setLang(await (await fetch(`./src/assets/Lang/en.lang`)).json())
          localStorage.setItem('lang', 'en')
        }
      } catch (error) { console.error('Error getting data from localStorage: ', error) }
    })()
  }, [])

  //Pantalla de carga
  if (lang === null) return (
    <>
      <h1 style={{ fontSize:'3em' }}>Loading...</h1>
    </>
  )

  return (
    <>
      {
        screen.menu &&
        <Menu
          config={ () => handlerScreen('config', true)}
          lang={ lang.menu }
          play={ () => handlerScreen('play', true) }
        />
      }
      {
        screen.config &&
        <Config
          back={ () => handlerScreen('config', false) }
          lang={ lang.options }
        />
      }
      {
        screen.play &&
        <PlayMenu
          back={ () => handlerScreen('play', false) }
          lang={ lang.playMenu }
        />
      }
    </>
  )
}