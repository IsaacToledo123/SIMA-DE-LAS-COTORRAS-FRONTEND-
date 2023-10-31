function Comentario({ username, userphoto, comment, date }) {

      return (

            <div className="p-10">

                  <div className="md:p-5 p-10 flex justify-center font-bold">
                        <div>
                              <h1 className="text-xl">{username}</h1>
                              <p className="text-green-600 font-bold pt-2">{date}</p>
                              <img src={userphoto} alt="Foto del usuario pt-2" width={100} />

                        </div>

                        <div className="pl-5 pt-10">
                              <p className="text-xl">{comment}</p>
                        </div>
                  </div>


            </div>

      )
}

export default Comentario;