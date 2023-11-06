function Comentario({ username, userphoto, comment, date }) {

      return (

            <div className="md:p-10 p-5 font-thin">

                  <div className="md:p-5 flex justify-center">

                        <div className="md:pr-10 pr-5">
                              <h1 className="md:text-xl text-md">{username}</h1>
                              <img
                                    src={userphoto}
                                    alt="Foto del usuario pt-2"
                                    className="md:w-24 w-14 pt-3"
                              />

                        </div>

                        <div>

                              <p className="text-green-600">{date}</p>
                              <div className="md:pl-5 pl-2 pt-5 border border-l-8 pb-5">
                                    <p className="md:text-xl w-64 md:w-96 text-md">{comment}</p>
                              </div>

                        </div>
                  </div>

            </div>

      )
}

export default Comentario;