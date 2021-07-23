import Input from '../components/Input';

export default {
    title: 'Components/Input',
    component: Input,
}

export const Small = () => <Input size="small" placeholder="Small" variant="standard" label="Small Input" />
export const Medium = () => <Input size="medium" placeholder="Medium" variant="filled" label="Medium Input" />
export const Large = () => <Input size="large" placeholder="Large" variant="outlined" label="Large Input" />