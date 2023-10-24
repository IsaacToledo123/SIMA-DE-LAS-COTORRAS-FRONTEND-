function Comentario({ username, userphoto, comment, date }) {

      return (

            <div className="p-10">

                  <div className="p-10 bg-emerald-700 text-white flex justify-center">
                        <div>
                              <h1 className="text-xl">{username}</h1>
                              <p className="text-green-500">{date}</p>
                              <img src={userphoto} alt="Foto del usuario" width={100} />

                        </div>

                        <div className="pl-5 pt-10">
                              <p className="text-xl">{comment}</p>
                        </div>
                  </div>


            </div>

      )
}

export default Comentario;