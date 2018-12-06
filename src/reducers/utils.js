

function getMenuDate(plus_days) {
    let d = new Date();
    let day = d.getDay();
    let diff = d.getDate() - day + (day === 0 ? -6:1);
    let monday_date = new Date(d.setDate(diff));
    let new_date = (plus_days) ? new Date(monday_date.getTime() + 86400000 * plus_days): new Date(monday_date.getTime());
    let new_date_day = (new_date.getDate() < 10) ? `0${new_date.getDate()}` : new_date.getDate();
    return `${new_date.getFullYear()}-${new_date.getMonth()+1}-${new_date_day}`
}

export const week_menu_example = [
    {
        "day": getMenuDate(null),
        "recipe": {
            "id": "90",
            "name": ""
        }
    },
    {
        "day": getMenuDate(1),
        "recipe": {
            "id": "42",
            "name": ""
        }
    },
    {
        "day": getMenuDate(2),
        "recipe": {
            "id": "310",
            "name": ""
        }
    },
    {
        "day": getMenuDate(3),
        "recipe": {
            "id": "112",
            "name": ""
        }
    },
    {
        "day": getMenuDate(4),
        "recipe": {
            "id": "295",
            "name": ""
        }
    },
    {
        "day": getMenuDate(5),
        "recipe": {
            "id": "311",
            "name": ""
        }
    },
    {
        "day": getMenuDate(6),
        "recipe": {
            "id": "93",
            "name": ""
        }
    }
];