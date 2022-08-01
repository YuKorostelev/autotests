// autotest for method api.hh.ru/employers/{}


pm.test("Проверка статуса 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Body matches string {вставить строку}", function () {
    pm.expect(pm.response.text()).to.include("{вставить строку}");
});

pm.test("Response time is less than 50ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(50);
});


//autotest for method https://api.hh.ru/employers?text={"вставить строку"}

pm.test("Проверка статуса 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Body matches string {"вставить строку"}", function () {
    pm.expect(pm.response.text()).to.include("{"вставить строку"}");
});

pm.test("Response time is less than 50ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(50);
});
