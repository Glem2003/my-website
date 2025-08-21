// component
import {
    ListItem,
    ListItemText,
    ListItemButton,
    Typography
} from '@mui/material';

// icon
import { IoIosMore } from '../../../assets/icon/index'

// type
import { ProjectListsType } from './projectLists.type';

// style
import { listItem, listItemType, listItemTitle, listItemDate, listItemButton } from './projectLists.style'

const ProjectLists: React.FC<ProjectListsType> = (props) => {

    const { type, title, date, onClick } = props

    return (
        <ListItem {...listItem}>
            <ListItemText {...listItemType}>
                {type.toLocaleUpperCase()}
            </ListItemText>
            <ListItemText>
                <Typography {...listItemTitle}>
                    {title}
                </Typography>
            </ListItemText>
            <ListItemText {...listItemDate}>
                {date.length <= 1 ? `${date[0]}` : `${date[0]} - ${date[1]}`}
            </ListItemText>
            <ListItemButton {...listItemButton} onClick={onClick}>
                <IoIosMore />
            </ListItemButton>
        </ListItem >
    )
}

export default ProjectLists