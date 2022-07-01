import React from 'react';
import { Box, SimpleGrid,Button, Input, Textarea, Select, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
const MakeAppointment = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <Box pt='40px' borderRadius={'10px'} boxShadow='md' width={'657px'} height={'579px'}>
            <Box  textAlign={'center'}>
                <Text fontWeight={'700'} letterSpacing='0.1px' color={'#252B42'} lineHeight='24px' >Contact Us</Text>
                <Text mb={'40px'} fontWeight={'700'} fontSize='40px' lineHeight={'57px'} letterSpacing='0.2px' color={'#252B42'}>Make an Appointment</Text>
                <Box width={'537px'} mx='auto' height='280px' >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <SimpleGrid columns={2} spacing='20px' >
                            <Input height={'50px'} required {...register('name')} fontSize={'14px'} color='#737373' lineHeight={'28px'} fontWeight='400' placeholder='Full Name*' />
                            <Input height={'50px'} required {...register('email')} fontSize={'14px'} color='#737373' lineHeight={'28px'} fontWeight='400' placeholder='Email*' />
                            <Select height={'50px'} required {...register('select')} fontSize={'14px'} color='#737373' lineHeight={'28px'} fontWeight='400' placeholder='Please Select'>
                                <option value='option1'>Option 1 </option>
                                <option value='option2'>Option 2 </option>
                            </Select>
                            <Select height={'50px'} disabled fontSize={'14px'} color='#737373' lineHeight={'28px'} fontWeight='400' >
                                <option value='4:00 Available'>4:00 Available </option>
                                <option value='4:30 Available'>4:30 Available</option>
                            </Select>
                        </SimpleGrid>
                        <Textarea required {...register('message')} mb='40px' mt={'20px'} height='140px' fontSize={'14px'} color='#252B42' lineHeight={'28px'} fontWeight='600' placeholder='Message' />
                        <Button type='submit' fontSize={'14px'} width='224px' height={'58px'} _hover={{backgroundColor:'#1a90d3'}} fontWeight='700' color={'white'}  bg='#23A6F0' size='lg'>
                        Book Appointment
                        </Button>
                    </form>
                </Box>
            </Box>
        </Box>
    );
};

export default MakeAppointment;