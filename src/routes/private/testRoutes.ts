import PrivateBaseRoute from './privateBaseRoute'

import testController from '../../controllers/private/testController'

class Test extends PrivateBaseRoute {
    constructor() {
        super('/test', testController)
    }
}

export default new Test().createRoutes()
