export function Info(){
    return(
        <div className="section">
            <h2>Generador de Titulares</h2><br/>
            <p>Este pequeño aplicativo busca apoyar al periodista en su proceso de <b>redactar los titulares</b> para las noticias web, teniendo en cuenta que cada titular que se maneja desde la plataforma del Content hub tiene una extensión determinada de caracteres de la siguiente manera:</p><br/>
            <ul>
                <li><b>Titular SEO:</b> Al ser el titular para buscadores, tiene una extensión máxima de <b>75 caracteres</b></li>
                <li><b>Titular Noticia:</b> Es el titular con el que se creó la noticia. Su extensión máxima es de <b>140 caracteres</b></li>
                <li><b>Titular Redes Sociales:</b> Es el titular con el que se publicará la noticia en redes sociales. Su extensión máxima es de <b>100 caracteres</b></li>
            </ul><br/>
            <p>Teniendo en cuenta el número máximo de cifras por titular, lo que se busca es que esta herramienta permita una visualización previa de los titulares generados por los periodistas, y también brindar la opción de copiar el contenido en el portapales para así poderlos enviar al grupo de WhatsApp <em>(Para pegar solo se debe presionar Ctrl+V)</em></p><br/>
            <h3>Información importante</h3><br/>
            <p>Esta herramienta se encuentra aún en proceso de desarrollo, por lo que por el momento sólo se encuentra disponible para versiones de pc. No obstante, se sigue trabajando para optimizar esta herramienta para ser utilizada desde dispositivos móviles.</p>
        </div>
    )
}