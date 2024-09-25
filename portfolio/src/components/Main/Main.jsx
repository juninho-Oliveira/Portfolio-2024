import './Main.css'
import { SectionBanner } from './SectionBanner/SectionBanner'
import { SectionExperiencia } from './SectionExperiencia/SectionExperiencia'
import { SectionProjetos } from './SectionProjetos/SectionProjetos'
import { SectionSobre } from './SectionSobre/SectionSobre'


export function Main () {
    return (
        <main>
          <SectionBanner />

          <SectionSobre />

          <SectionExperiencia />

          <SectionProjetos />
  </main>
  
    )
}