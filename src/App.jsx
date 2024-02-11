import './App.css'
import { useState , useEffect } from 'react'
import Menu from './components/Menu/Menu'

export const App = () => {
  //Se usa un useEffect y un useState para cambiar los datos del idioma en tiempo real
  const [lang, setLang] = useState(null)

  useEffect(() => {
    //Se obtiene la info del lenguaje del navegador para determinar el lenguaje de la app
    (async () => {
      try {
        const lang = localStorage.getItem('lang')
    
        if (lang === null) localStorage.setItem('lang', navigator.language)
    
        //Se obtiene el archivo lang con la info del lenguaje seleccionado
        try { setLang(await (await fetch(`./src/assets/Lang/${lang}.lang`)).json()) }
        catch (error) { console.error('Error loading language file: ', error) }
      } catch (error) { console.error('Error getting data from localStorage: ', error) }
    })()
  }, [])

  //Pantalla de carga
  if (lang === null) return (
    <>
      <h1 style={{ fontSize:'3em' }}>UwU...?</h1>
    </>
  )

  return (
    <>
      <Menu lang={lang.menu} />
    </>
  )
}