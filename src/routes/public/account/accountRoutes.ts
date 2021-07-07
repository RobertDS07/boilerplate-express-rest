import accountController from './accountController'
import accountMiddlewares from './accountMiddlewares'

import BaseClassRoutes from '../../baseClassRoutes'

class AccountRoutes extends BaseClassRoutes {
    constructor() {
        super('/account', accountMiddlewares, accountController)
    }
}

export default new AccountRoutes().createRoutes()
