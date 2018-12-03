// conf.js
exports.config = {
  directConnect: true,
  
  capabilities: {
	  'browserName': 'chrome'
  }, 	
  
  framework: 'jasmine',
  
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  
  specs: ['spec.js'],
  
  jasmineNodeOpts: {
	 defaultTimeoutInterval: 30000 
  }
  
}