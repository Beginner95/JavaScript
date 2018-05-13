describe("getDecimal", function() {

    it('Получаю дробную часть от 1.5 ожидаю 0.5', function() {
        assert.equal(getDecimal(1.5), 0.5);
    });
    
    it('Получаю дробную часть от 0.5 ожидаю 0.5', function() {
        assert.equal(getDecimal(0.5), 0.5);
    });
  
    it('Получаю дробную часть от 1 ожидаю 0', function() {
        assert.equal(getDecimal(1), 0);
    });
    
    it('Получаю дробную часть от -55.55 ожидаю 0.57', function() {
        assert.equal(getDecimal(-55.56565655), 0.57);
    });
  
});