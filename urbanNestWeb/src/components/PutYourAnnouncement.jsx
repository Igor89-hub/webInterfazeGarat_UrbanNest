import React, { useState } from 'react';
import { useNavigate } from 'react-router';

export function PutYourAnnouncement() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);

    // Estado para guardar todos los datos del formulario
    const [formData, setFormData] = useState({
        tipoAnuncio: 'venta',
        tipoVivienda: '',
        precio: '',
        metrosCuadrados: '',
        habitaciones: 2,
        banos: 1,
        calle: '',
        ciudad: '',
        descripcion: ''
        // ... puedes añadir más campos aquí
    });

    // Funciones para navegar entre pasos
    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    // Función genérica para manejar cambios en los inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    
    // Funciones para los contadores de habitaciones/baños
    const handleIncrement = (field) => {
        setFormData(prev => ({ ...prev, [field]: prev[field] + 1 }));
    };

    const handleDecrement = (field) => {
        setFormData(prev => ({ ...prev, [field]: Math.max(0, prev[field] - 1) }));
    };

    const goBackPage = () => {
        navigate("/");
    }

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <>
                        <h2 className="pya-form-title">Datos básicos del anuncio</h2>
                        <div className="pya-form-group">
                            <label>Tipo de anuncio</label>
                            <div className="pya-radio-group">
                                <label className={formData.tipoAnuncio === 'venta' ? 'active' : ''}>
                                    <input type="radio" name="tipoAnuncio" value="venta" checked={formData.tipoAnuncio === 'venta'} onChange={handleChange} /> Venta
                                </label>
                                <label className={formData.tipoAnuncio === 'alquiler' ? 'active' : ''}>
                                    <input type="radio" name="tipoAnuncio" value="alquiler" checked={formData.tipoAnuncio === 'alquiler'} onChange={handleChange} /> Alquiler
                                </label>
                            </div>
                        </div>
                        <div className="pya-form-group">
                            <label htmlFor="tipoVivienda">Tipo de vivienda</label>
                            <select id="tipoVivienda" name="tipoVivienda" value={formData.tipoVivienda} onChange={handleChange}>
                                <option value="">Selecciona una opción...</option>
                                <option value="piso">Piso</option>
                                <option value="chalet">Chalet</option>
                                <option value="duplex">Dúplex</option>
                                <option value="estudio">Estudio</option>
                            </select>
                        </div>
                        <div className="pya-form-group">
                            <label htmlFor="precio">Precio (€)</label>
                            <input type="number" id="precio" name="precio" placeholder="Ej: 300000" value={formData.precio} onChange={handleChange} />
                        </div>
                         <div className="pya-form-group">
                            <label htmlFor="metrosCuadrados">Metros cuadrados (m²)</label>
                            <input type="number" id="metrosCuadrados" name="metrosCuadrados" placeholder="Ej: 120" value={formData.metrosCuadrados} onChange={handleChange} />
                        </div>
                    </>
                );
            case 2:
                return (
                    <>
                        <h2 className="pya-form-title">Detalles de la vivienda</h2>
                        <div className="pya-form-group">
                            <label>Nº de habitaciones</label>
                            <div className="pya-counter">
                                <button type="button" onClick={() => handleDecrement('habitaciones')}>-</button>
                                <input type="text" value={formData.habitaciones} readOnly />
                                <button type="button" onClick={() => handleIncrement('habitaciones')}>+</button>
                            </div>
                        </div>
                        <div className="pya-form-group">
                            <label>Nº de baños</label>
                            <div className="pya-counter">
                                <button type="button" onClick={() => handleDecrement('banos')}>-</button>
                                <input type="text" value={formData.banos} readOnly />
                                <button type="button" onClick={() => handleIncrement('banos')}>+</button>
                            </div>
                        </div>
                         <div className="pya-form-group">
                            <label htmlFor="descripcion">Descripción del anuncio</label>
                            <textarea id="descripcion" name="descripcion" rows="6" placeholder="Describe lo mejor de tu vivienda, sus características especiales, el barrio..." value={formData.descripcion} onChange={handleChange}></textarea>
                        </div>
                    </>
                );
            case 3:
                return (
                     <>
                        <h2 className="pya-form-title">Ubicación y Confirmación</h2>
                        <div className="pya-form-group">
                            <label htmlFor="calle">Dirección</label>
                            <input type="text" id="calle" name="calle" placeholder="Ej: Calle de las Aguas, 12" value={formData.calle} onChange={handleChange} />
                        </div>
                         <div className="pya-form-group">
                            <label htmlFor="ciudad">Ciudad</label>
                            <input type="text" id="ciudad" name="ciudad" placeholder="Ej: Madrid" value={formData.ciudad} onChange={handleChange} />
                        </div>
                        <p className="pya-confirm-text">¡Ya casi está! Revisa los datos y publica tu anuncio.</p>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className="pya-container">
            <div className="pya-form">
                <div className="pya-stepper">
                    <p>Paso {step} de 3</p>
                    <div className="pya-progress-bar">
                        <div className="pya-progress" style={{ width: `${(step / 3) * 100}%` }}></div>
                    </div>
                </div>
                <form onSubmit={(e) => e.preventDefault()}>
                    {renderStep()}
                    <div className="pya-navigation">
                        {step > 1 && <button type="button" className="pya-btn-prev" onClick={prevStep}>Atrás</button>}
                        {step < 3 && <button type="button" className="pya-btn-next" onClick={nextStep}>Siguiente</button>}
                        {step === 3 && <button type="submit" className="pya-btn-submit" onClick={goBackPage}>Publicar Anuncio</button>}
                    </div>
                </form>
            </div>
        </div>
    );
}