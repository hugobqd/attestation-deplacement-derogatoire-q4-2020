import 'bootstrap/dist/css/bootstrap.min.css'

import '../css/main.css'
import '../css/addons.css'

import './icons'
import './check-updates'
import { prepareForm } from './form-util'
import { warnFacebookBrowserUserIfNecessary } from './facebook-util'
import { addVersion } from './util'
import { createForm } from './form'
import { storeInputs } from './store-inputs'
import { collapse } from './collapse'

warnFacebookBrowserUserIfNecessary()
createForm()
prepareForm()
storeInputs()
collapse()
addVersion(process.env.VERSION)
