const SellerModel = require('../database/Models/Seller')

class Seller {
  constructor () {
    this.model = SellerModel
  }

  create (data) {
    return new Promise(async (resolve, reject) => {
      try {
        const seller = await this.model.create({
          nombre: data.name,
          apellidos: data.lastname,
          usuario: data.user,
          celular: data.cellular,
          contrasena: data.password,
          ubicacion: data.location
        })

        resolve(seller)
      } catch (error) {
        reject(error)
      }
    })
  }
}

module.exports = new Seller()
