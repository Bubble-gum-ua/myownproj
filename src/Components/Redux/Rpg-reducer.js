import React from "react";

let initialstate = {
rpg: [
    {
        id: 1,
        name: <h1>"World Of Warcraft"</h1>,
        avatar: <img
            src="https://bnetcmsus-a.akamaihd.net/cms/blog_thumbnail/vf/VFSJHEPJW1SN1575917878251.jpg"/>,
        text: <p> WoW Classic предлагает увидеть мир игры в том виде, в котором он был на момент контентного
            обновления 1.12.1 (сентябрь 2006 года) перед выходом первого дополнения — The Burning Crusade.
            Максимальный уровень персонажа — 60, а в игре отсутствует любое контентное обновление. В игре
            полностью воспроизведён тот самый игровой процесс и механики, которые были 13 лет назад. Так как
            многочисленные обновления со временем кардинально изменили игровой процесс, WoW Classic позволяет
            игрокам вновь испытать те самые чувства и эмоции, хотя некоторые современные интерфейсы и
            функциональные улучшения, представленные в более поздних обновлениях и дополнениях, были
            интегрированы, а также устранены различного рода ошибки, которые присутствовали в оригинальной
            версии обновления 1.12.
            <br/>
            <br/>

            Игрокам для создания персонажа доступны 8 рас, которые были представлены в оригинальном World of
            Warcraft: люди, дворфы, ночные эльфы и гномы для Альянса; орки, Отрёкшиеся, таурены и тролли для
            Орды; а также 9 классов: воин, паладин, охотник, шаман, друид, разбойник, жрец, маг, чернокнижник.
            Как и в оригинальной версии игры, класс паладинов доступен только персонажам Альянса, а класс
            шаманов — персонажам ОрдыПерейти к разделу «#Сочетание рас и классов». Мир представляет из себя лишь
            2 континента: Калимдор и Восточные королевства.

            Как и в любом другом дополнении, контент в WoW Classic будет добавляться на протяжении шести
            обновлений, чтобы игроки могли постепенно развивать своих героев. Игровой контент, первоначально
            выпущенный в таких обновлениях, как «Логово Крыла Тьмы», «Ан'Кираж» и «Наксрамас», поля битвы, такие
            как «Ущелье Песни Войны» и «Альтеракская долина», а также некоторые предметы и задания, станут
            доступны после соответствующего обновления. В отличие от обновлений для оригинальной игры, эти
            обновления не будут изменять механику основной игры, например, способности персонажа; баланс игры
            будет сохраняться на том уровне, на котором он был в обновлении 1.12.1.</p>,
        year: 2010,
        pcpreferences: "too much"
    },

],};

const rpgReducer = (state = initialstate.rpg) =>{
    debugger;
    return{
state
    }
};

export default rpgReducer;
