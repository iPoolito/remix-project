import { db } from "~/utils/db.server";


export function getAllTaskStatus() {
    return db.taskStatus.findMany({ select: { name: true, id: true } });
}