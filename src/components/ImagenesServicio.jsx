const ImagenesServicio = ({ nombre, imagen, verServicio, idServicio }) => {

      return (

            <div className="relative group cursor-pointer flex justify-center pt-3 pb-3 m-3 shadow-md px-2" onClick={e => {verServicio(idServicio)}}>

                  <img
                        src={imagen}
                        alt="fotografía del servicio"
                        className="group-hover:brightness-75 object-cover"
                  />
                  <div class="absolute inset-0 flex items-center opacity-0 group-hover:opacity-100 transition-opacity justify-center">
                        <p class="text-white font-bold text-center text-2xl">{nombre}</p>
                  </div>

            </div>

      )

}

export default ImagenesServicio