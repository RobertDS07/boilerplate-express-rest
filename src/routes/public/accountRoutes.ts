import accountController from '../../controllers/public/accountController'
import accountMiddlewares from '../../middlewares/public/accountMiddlewares'

import BaseClassRoutes from '../baseClassRoutes'

class AccountRoutes extends BaseClassRoutes {
    constructor() {
        super('/account', accountMiddlewares, accountController)
    }
}

export default new AccountRoutes().createRoutes()
