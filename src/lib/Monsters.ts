import {Monster} from "@/types/Monster";
import monsters from "../../cdn/json/monsters.json";
import {MonsterAttribute} from "@/enums/MonsterAttribute";

export function getMonsters(): Monster[] {
    return monsters.map((m) => {
        return {
            id: m.id,
            name: m.name,
            version: m.version,
            image: m.image,
            size: m.size,
            skills: {
                atk: m.skills[0],
                def: m.skills[1],
                hp: m.skills[2],
                magic: m.skills[3],
                ranged: m.skills[4],
                str: m.skills[5]
            },
            offensive: {
                atk: m.offensive[0],
                magic: m.offensive[1],
                magic_str: m.offensive[2],
                ranged: m.offensive[3],
                ranged_str: m.offensive[4],
                str: m.offensive[5]
            },
            defensive: {
                crush: m.defensive[0],
                magic: m.defensive[1],
                ranged: m.defensive[2],
                slash: m.defensive[3],
                stab: m.defensive[4]
            },
            attributes: m.attributes as MonsterAttribute[],
        } as Monster
    });
}
