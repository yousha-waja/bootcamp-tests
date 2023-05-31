describe('testing the "greet" function' , function(){
    it('it does return Hello yousha' , function(){
        assert.equal("Hello, yousha", greet("yousha"), "it is not equal");

    });

    it('it does return Hello Tshepo' , function(){
        assert.equal("Hello, Tshepo", greet("Tshepo"), "it is not equal");

    });

    it('it does return Hello pumi' , function(){
        assert.equal("Hello, pumi", greet("pumi"), "it is not equal");

    });
}); 