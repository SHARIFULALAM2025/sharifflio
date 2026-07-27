interface PageProps {
  params: Promise<{ id: string }>
}
import data from '@/app/data/project.json'
import ProjectDetails from '@/Components/ProjectDetails'
import { ProjectData } from '@/Components/Type'
const Page = async ({ params }: PageProps) => {
    const allData = data as ProjectData[]
    const { id } = await params
    const singleData = allData.find(item=>item.id===Number(id))

    return (
      <div>
        <ProjectDetails singleData={singleData} />
      </div>
    )
}

export default Page
