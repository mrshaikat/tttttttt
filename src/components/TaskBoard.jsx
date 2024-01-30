import Task from "./Task";
import TaskHeader from "./TaskHeader";

export default function TaskBoard({tasks, onAddTask, onEditTask, onClose, onOpen}){
    return (
        <section className="mb-20" id="tasks">
		
		<div className="container">
			<div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
				<TaskHeader onClose={onClose} onOpen={onOpen}/>
				<div className="overflow-auto">
					<table className="table-fixed overflow-auto xl:w-full">
						<thead>
							<tr>
								<th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
								<th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]"> Title </th>
								<th className="p-4 pb-8 text-sm font-semibold capitalize w-full"> Description </th>
								<th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]"> Tags </th>
								<th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]"> Priority </th>
								<th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]"> Options </th>
							</tr>
						</thead>
						<tbody>
							{tasks.map((task => <Task key={task.id} task={task} onEditTask={onEditTask}/> ))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
</section>
    );
}