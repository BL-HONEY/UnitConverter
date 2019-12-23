const
      express = require('express'),
      router = express.Router(),
      unitConverterController = require('../controller/unitConverter');

router.post('/unitConverter/:measure',unitConverterController.conversionControl );
router.get('/unitConverter/:measure', unitConverterController.measureControl );

module.exports = router;