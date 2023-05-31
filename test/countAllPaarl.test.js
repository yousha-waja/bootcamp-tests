describe('testing the "countAllPaarl" function' , function(){
    it('it does return the number of reg numbers from Paarl' , function(){
        assert.equal(2, countAllPaarl('CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864').length, 'There are 2 Paarl reg numbers.');

    });

    it('it does return a match for the first Paarl reg number' , function(){
        assert.equal('CJ 678 543', countAllPaarl('CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864')[0]);

    });

    it('it does return a match for the second Paarl reg number' , function(){
        assert.equal('CJ 67890', countAllPaarl('CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864')[1]);

    });

}); 