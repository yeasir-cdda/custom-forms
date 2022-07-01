import React from 'react';
import { Box, Flex, Image, FormControl, Button, Input, FormLabel, Select, Text } from "@chakra-ui/react";

import { useForm } from "react-hook-form";

const BookAppointment = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <Box borderRadius={'10px'} boxShadow='md' width={'877px'} height='616px' >
            <Flex>
                <Box width={'267px'} height='616px'>
                    <Image src='formImg.png' />
                </Box>
                <Box pt='40px' width={'610px'} height={'616px'}>
                    <Box textAlign={'center'}>

                        <Text mb={'40px'} fontWeight={'700'} fontSize='24px' lineHeight={'32px'} letterSpacing='0.1px' color={'#252B42'}>Book Appointment</Text>
                        <Box width={'510px'} mx='auto' height='366px' >
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <FormControl>
                                    <FormLabel fontSize={'14px'} fontWeight='600' lineHeight={'24px'} letterSpacing='0.2px' color={'#252B42'} mt='10px' htmlFor='name'>Name *</FormLabel>
                                    <Input height={'50px'} id='name' required {...register('name')} fontSize={'14px'} color='#737373' lineHeight={'28px'} fontWeight='400' placeholder='Full Name *' />
                                    <FormLabel fontSize={'14px'} fontWeight='600' lineHeight={'24px'} letterSpacing='0.2px' color={'#252B42'} mt='10px' htmlFor='email'>Email address *</FormLabel>
                                    <Input height={'50px'} required {...register('email')} fontSize={'14px'} color='#737373' lineHeight={'28px'} fontWeight='400' placeholder='example@email.com' />
                                    <FormLabel fontSize={'14px'} fontWeight='600' lineHeight={'24px'} letterSpacing='0.2px' color={'#252B42'} mt='10px' htmlFor='department'>Department *</FormLabel>
                                    <Select height={'50px'} id='department' required {...register('depertment')} fontSize={'14px'} color='#737373' lineHeight={'28px'} fontWeight='400' placeholder='Please Select'>
                                        <option value='option1'>Option 1 </option>
                                        <option value='option2'>Option 2 </option>
                                    </Select>
                                    <FormLabel fontSize={'14px'} fontWeight='600' lineHeight={'24px'} letterSpacing='0.2px' color={'#252B42'} mt='10px' htmlFor='time'>Time *</FormLabel>
                                    <Select required id='time' {...register('time')} height={'50px'} fontSize={'14px'} color='#737373' lineHeight={'28px'} fontWeight='400' >
                                        <option value='4:00 Available'>4:00 Available </option>
                                        <option value='4:30 Available'>4:30 Available</option>
                                    </Select>
                                </FormControl>
                                <Button mt='40px' type='submit' fontSize={'14px'} width='full' height={'58px'} _hover={{ backgroundColor: '#1a90d3' }} fontWeight='700' color={'white'} bg='#23A6F0' size='lg'>
                                    Book Appointment
                                </Button>
                            </form>
                        </Box>
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
};

export default BookAppointment;