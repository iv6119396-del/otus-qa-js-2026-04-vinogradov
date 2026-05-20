function kolobok(nameCharacter) {
    if (nameCharacter === 'дедушка') {
        return 'Я от дедушки ушёл';
    } else if (nameCharacter === 'заяц') {
         return 'Я от зайца ушёл';
    } else (nameCharacter === 'лиса') {
        return 'Меня съели';
    }
    return 'Неизвестный персонаж'
}

console.log(kolobok('дедушка'))
console.log(kolobok('лиса'))
console.log(kolobok('заяц'))

function newYear(namePerson) {
    if (namePerson === 'Дед Мороз') {
        return "Дед Мороз! Дед Мороз! Дед Мороз!";
  } else if (namePerson === 'Снегурочка') {
        return "Снегурочка! Снегурочка! Снегурочка!";
  }
  return "Неизвестный персонаж";
}