import { json } from "@remix-run/node";
import { Form, useNavigate } from "@remix-run/react";
import { FormInput } from "~/components/FormInput";
import { getAllTaskStatus } from "~/models/taskstatus.server";

export const loader = async () => {
    const taskStatus = await getAllTaskStatus()
    console.log(taskStatus)
    return json({ taskStatus })
}


export default function CreateTask() {
    const navigate = useNavigate()
    return (
        <Form>
            <div className="space-y-12 p-16">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Crea un TODO</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                        Esta informacion es unicamente tuya.
                    </p>
                </div>

                <div className="border-b border-gray-900/10 pb-12">
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <FormInput label="Titulo" name="title" type="text" />
                        </div>
                        <div className="sm:col-span-4">
                            <FormInput label="Contenido" name="content" type="textarea" />
                        </div>
                        <div className="sm:col-span-4">
                            <FormInput label="Status" name="status" type="select" />
                        </div>

                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-x-6">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={() => navigate('/')}>
                    Cancel
                </button>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Save
                </button>
            </div>
        </Form>
    )
}