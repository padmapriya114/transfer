const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "cbanc.cny7tsngrm4b.us-east-2.rds.amazonaws.com",
  database: "postgres",
  password: "cbanc2021",
  port: 5432
});

const inserttransfer = (request, response) => {
const { id, amountinpennies, transfer_status_id,feeInpennies, transfer_feepaidby_id, rollupid, moneywas, previousprincipalbalanceinpennies, deal_participant_id,created,transfer_money_status_id} = request.body
  pool.query( "INSERT INTO cbanc2.transfer (id,amountinpennies,transfer_status_id,feeInpennies,transfer_feepaidby_id, rollupid, moneywas,previousprincipalbalanceinpennies, deal_participant_id,created,transfer_money_status_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)",[id, amountinpennies,transfer_status_id,feeInpennies,transfer_feepaidby_id, rollupid, moneywas, previousprincipalbalanceinpennies, deal_participant_id,created,transfer_money_status_id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send('A new row is inserted in transfer')
  })
}

module.exports = {
inserttransfer
}
