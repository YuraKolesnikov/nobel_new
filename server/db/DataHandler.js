class DataHandler {
  constructor(db) {
    this.db = db
  }

  getLaureates() {
    return this.db.getLaureates()
  }

  getLaureate(req, res) {
    return this.db.getLaureate(req, res)
  }

  createLaureate(req, res) {
    return this.db.createLaureate(req, res)
  }

  deleteLaureate(req, res) {
    return this.db.deleteLaureate(req, res)
  }

  updateLaureate(req, res) {
    return this.db.updateLaureate(req, res)
  }
}

module.exports = { DataHandler }