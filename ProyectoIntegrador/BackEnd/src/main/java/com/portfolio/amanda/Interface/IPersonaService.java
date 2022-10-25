package com.portfolio.amanda.Interface;

import com.portfolio.amanda.Entity.Persona;
import java.util.List;

public interface IPersonaService {
    //traer una lista de personas
    public List<Persona> getPersona();
    
    //guardar un obj de tipo Persona
    public void savePersona(Persona persona);
    
    //eliminar obj pero buscado por ID
    public void deletePersona(Long id);
    
    //buscar una persona por ID
    public Persona findPersona(Long id);
}
