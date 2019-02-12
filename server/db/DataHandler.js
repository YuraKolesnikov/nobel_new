class DataHandler {
  constructor(db) {
    this.db = db
  }

  fetchLaureates() {
    return this.db.fetchLaureates()
  }

  fetchLaureate(req, res) {
    return this.db.fetchLaureate(req, res)
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