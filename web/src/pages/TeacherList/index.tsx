import React from 'react';
import PageHeader from '../../components/pageHeader';
import Input from '../../components/input';
import TeacherItem from '../../components/TeacherItem';

import './styles.css';


function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os Professores disponíveis.">
                <form className="search-teachers">
                    <Input name="subject" label="Matéria"/>
                    <Input name="week_day" label="Dia da semana"/>
                    <Input type="time" name="time" label="Hora"/>
                    
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>

        </div>
    )
}

export default TeacherList;