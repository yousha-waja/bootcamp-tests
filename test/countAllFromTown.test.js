describe('testing the "countAllfromTown" function' , function(){
    it('it does return registration numbers from stellies' , function(){
        assert.deepEqual(['CL 124', 'CL 345', 'CL 341'], allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'), "Incorrect answer was returned" );

    });

    it('it does return registration numbers from stellies' , function(){
        assert.deepEqual(allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CJ'),['CJ 456']);

    });
   
    it('it does return registration numbers from Cape Town' , function(){
        let Cape = allFromTown('CA 124,CY 567,CL 345, CJ 456,CL 341','CA');
        assert.equal(Cape[0],'CA 124');

    });

    it('it does return registration numbers from Kuilsriver' , function(){
        assert.deepEqual(allFromTown('CA 124,CF 567,CL 345, CJ 456,CF 341','CF'),['CF 567', 'CF 341']);

    });
}); 