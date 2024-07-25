import { RxDashboard } from "react-icons/rx";
import { MdWidgets, MdOutlineAssignment, MdTableChart, MdInsertChartOutlined, MdInsertEmoticon } from "react-icons/md";
import Dashboard from "../components/admin/components/dashboard/Dashboard";
import Components from "../components/admin/components/comp/Components";

// import Dashboard from "../admin/components/dashboard/Dashboard";
// import Forms from "../admin/components/forms/Forms";
// import Tables from "../admin/components/tables/Tables";
// import Charts from "../admin/components/charts/Charts";
// import Icons from "../admin/components/icons/Icons";
// import Components from "../admin/components/comp/Components";

const data = [
    {
        title: 'Dashboard',
        icon: <RxDashboard size={'1.5rem'}/>,
        content:<Dashboard/>
         
    },
    {
        title: 'Components',
        icon: <MdWidgets size={'1.5rem'}/>,
        content:<Components/>
    },
    {
        title: 'Forms',
        icon: <MdOutlineAssignment size={'1.5rem'}/>,
         
    },
    {
        title: 'Tables',
        icon: <MdTableChart size={'1.5rem'}/>,
         
    },
    {
        title: 'Charts',
        icon: <MdInsertChartOutlined size={'1.5rem'}/>,
         
    },
    {
        title: 'Icons',
        icon: <MdInsertEmoticon size={'1.5rem'}/>,
         
    },
];

export default data;
