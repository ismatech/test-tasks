/*
    task
    1. Напишите функцию подготовки строки, которая заполняет шаблон данными из указанного объекта
    2. Пришлите код целиком, чтобы можно его было проверить
    3. Придерживайтесь code style текущего задания
    4. По необходимости - можете дописать код, методы
    5. Разместите код в гите и пришлите ссылку
*/

/**
 * Класс для работы с API
 *
 * @author		Kurbanov Ismatullo
 * @version		v.1.0 (30.05.2024)
 */
class Api
{
	constructor() 
	{

	}


	/**
	 * Заполняет строковый шаблон template данными из объекта object
	 *
	 * @author		Kurbanov Ismatullo
	 * @version		v.1.0 (30.05.2024)
	 * @param		{object} object
	 * @param		{string} template
	 * @return		{string}
	 */
	get_api_path(object, template)
	{
		let result = '';

		/* Здесь ваш код */
		for (const prop in object) {
			if (result === '') {
				result = template.replace(`%${prop}%`, encodeURI(object[prop]));
			} else {
				result = result.replace(`%${prop}%`, encodeURI(object[prop]));
			}
		}

		return result;
	}
}


let user =
{
	id		: 20,
	name	: 'John Dow',
	role	: 'QA',
	salary	: 100
};

let api_path_templates =
[
	"/api/items/%id%/%name%",
	"/api/items/%id%/%role%",
	"/api/items/%id%/%salary%"
];

let api = new Api();

let api_paths = api_path_templates.map((api_path_template) =>
{
	return api.get_api_path(user, api_path_template);
});

console.log(JSON.stringify(api_paths));

// Ожидаемый результат
let expected_result = ["/api/items/20/John%20Dow","/api/items/20/QA","/api/items/20/100"];
