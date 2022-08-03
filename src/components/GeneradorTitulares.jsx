import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export function GeneradorTitulares(){
    
    const [titles, setTitles]=useState('');
    const [copy, setCopy]=useState('');


    return(
        <div className="section">
            <h2>Generador de Titulares  para enviar por WhatsApp</h2>
            <div className="Generator">
                <form 
                    onSubmit = {ev=>{
                        ev.preventDefault();
                        setTitles(
                        <div>
                            <b>-----TITULARES GENERADOS------</b><br/><br/>
                            1. {ev.target.tNot.value}<br/>
                            2. {ev.target.tSEO.value}<br/>
                            3. {ev.target.tRedes.value}<br/><br/>
                            <b>-----INFORMACIÓN SUGERIDA-----</b><br/><br/>
                            <b>Sección:</b> {ev.target.seccion.value}<br/>
                            <b>Tags:</b> {ev.target.tags.value}
                        </div>
                        )
                        setCopy(`
*-----TITULARES GENERADOS------*
1. ${ev.target.tNot.value}
2. ${ev.target.tSEO.value}
3. ${ev.target.tRedes.value}
*-----INFORMACIÓN SUGERIDA-----*
Sección: ${ev.target.seccion.value}
Tags: ${ev.target.tags.value}
                    `)                   
                }}
                    className="GeneradorTitulares"

                >
                    <label className="sec1">Titular SEO: </label><input className="in1" type="text" maxLength="75" name="tSEO" autoComplete="off"/>
                    <label className="sec2">Titular Noticia: </label><input className="in2" type="text" maxLength="140" name="tNot" autoComplete="off"/>
                    <label className="sec3">Titular Para Redes: </label><input className="in3" type="text" maxLength="100" name="tRedes" autoComplete="off"/>
                    <label className="sec4">Sección:</label>
                    <select className="in4" name="seccion">
                            <option selected>Por defecto</option>
                            <option>Tolima</option>
                            <option>Ibagué</option>
                            <option>Judicial</option>
                            <option>Política</option>
                            <option>Huila</option>
                            <option>Deportes</option>
                            <option>Tendencias</option>
                        </select>
                        <label className="sec5">Sugerir Etiquetas: </label><input className="in5" type="text" maxLength="75" name="tags" placeholder="Favor separar con comas"/><br/>    
                    <button id="Btn" type="submit">Generar titulares</button>            
                </form>
                <div className="generated">
                    <div className="titlesGen" id="titlesGen">{titles}</div>
                    <CopyToClipboard text={copy}>
                        <button>Copiar texto</button>
                    </CopyToClipboard>
                </div>
            </div>
        </div>
    );    
}
