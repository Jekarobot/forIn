import orderByProps from '../notifications';

test('Проверяем работу функции orderByProps с простым массивом', () => {
    const obj = {
        name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
    };
    const result = [
        {key: "name", value: "мечник"},
        {key: "level", value: 2},
        {key: "attack", value: 80},
        {key: "defence", value: 40},
        {key: "health", value: 10}
    ];
    expect(orderByProps(obj, ['name', 'level'])).toEqual(result);
});

test('Проверяем работу изменения порядка в выводе объекта', () => {
    const obj = {
        name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
    };
    const order = ['name', 'level', 'defence', 'attack', 'health'];
    const result = [
        {key: "name", value: "мечник"},
        {key: "level", value: 2},
        {key: "defence", value: 40},
        {key: "attack", value: 80},
        {key: "health", value: 10}, 
    ];
    expect(orderByProps(obj, order)).toEqual(result);
})