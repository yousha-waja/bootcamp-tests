describe('testing the "fromWhere" function' , function(){
    it('it does return Bellville' , function(){
        assert.equal(fromWhere('CY 567489'), 'Bellville'); 

    });

    it('it does return Paarl' , function(){
        assert.equal(fromWhere('CJ 453502'), 'Paarl'); 

    });

    it('it does return Cape Town' , function(){
        assert.equal(fromWhere('CA 987504'), 'Cape Town'); 

    });

    it('it does return Some other place' , function(){
        assert.equal(fromWhere('GP 568593'), 'Some other place!'); 

    });
}); 