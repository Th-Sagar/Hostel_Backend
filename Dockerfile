FROM node 

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY .env .env
COPY utils/cloudinary.js utils/cloudinary.js
COPY utils/db.js utils/db.js
COPY server.js server.js

COPY router/auth-router.js router/auth-router.js
COPY router/hostelDetails-router.js router/hostelDetails-router.js
COPY router/update-router.js router/update-router.js
COPY controller/auth-controller.js controller/auth-controller.js

COPY controller/hostelDetails-controller.js  controller/hostelDetails-controller.js
COPY controller/password-controller.js  controller/password-controller.js
COPY controller/reset-controller.js  controller/reset-controller.js
COPY controller/token-controller.js  controller/token-controller.js
COPY controller/update-controller.js  controller/update-controller.js


COPY middleware/auth-middleware.js middleware/auth-middleware.js
COPY middleware/error-middleware.js middleware/error-middleware.js
COPY middleware/multer-middleware.js middleware/multer-middleware.js
COPY middleware/user-middleware.js middleware/user-middleware.js
COPY middleware/validate-middleware.js middleware/validate-middleware.js

COPY model/hostel-model.js model/hostel-model.js
COPY model/reset-model.js model/reset-model.js
COPY model/user-model.js model/user-model.js

COPY validators/auth-validate.js validators/auth-validate.js
COPY validators/hostel-validate.js validators/hostel-validate.js

RUN npm install 
ENTRYPOINT [ "node","server.js" ]