function Comentario({ username, userphoto, comment, date }) {

      return (

        <div className="bg-white rounded-lg p-4 mb-4 shadow-md">

          <div className="flex items-center">

            <div className="pr-4">
              <img
                src={userphoto}
                alt="Foto del usuario"
                className="w-12 h-12 rounded-full"
              />
            </div>

            <div>

              <h1 className="text-lg font-semibold">{username}</h1>
              <p className="text-gray-600 text-sm">{date}</p>

            </div>

          </div>
          
          <div className="mt-4">
            <p className="text-sm">{comment}</p>
          </div>

        </div>
      );
    }
    
    export default Comentario;
