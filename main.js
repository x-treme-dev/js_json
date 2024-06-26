/**
 * создать JSON Formatter. Но результат показываем не по нажатию кнопки, 
 * а проверяем каждые 3 секунды, что ввел пользователь и если там корректный JSON-текст, 
 * справа выводим его в отформатированном виде
 * 
 * {"objAskGrant":"Yes","objPass":"asdfasdf","objNameSurname":"asdfasdf adfasdf",
 * "objEmail":"asdfaf@asdfaf.com","objGsm":3241234123,"objAdres":"asdfasdf",
 * "objTerms":"CheckIsValid"}
 */

let inputJson = document.getElementById('inputJson').value;


setInterval(formattedJson, 3000, inputJson);

function formattedJson(inputJson){
    let object = '';
    try {
        object = JSON.parse(inputJson); // Получили json-строку, превратили ее в объект и сразу проверили на ошибки через try-catch
        //console.log(object);
        
        let formattedJson = JSON.stringify(object, null, 4); // если ошибок нет, то отформатируем 
        document.getElementById('outputDiv').innerHTML = formattedJson;

      } catch (e) {
        console.error("При разборе JSON произошла ошибка:", e); //проблемы с JSON!
        document.getElementById('message').innerHTML = '[format error!]';
      }

}





