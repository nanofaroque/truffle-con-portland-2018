const ExampleContract=artifacts.require("ExampleContract.sol");

contract("ExampleContract",accounts=>{
	describe('getExample',()=>{
		it("Should always return 'Example'",async()=>{
			let instance=await ExampleContract.new();
			let result=await instance.getExample.call();
			assert.equal(result,'Example');
		})
	})
});