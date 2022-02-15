import React from 'react'; 
import { screen } from "@testing-library/react";
import HealthHistory from '../../components/HealthHistory';
import { renderWithState } from '../renderWithState';

const initialState = {
	healthHistory: { diagnosis: "diagnosis" },
};

describe('HealthHistory', () => {

    it('should render a health history assessment', () => {
        renderWithState(<HealthHistory />, { initialState });

        expect(screen.findAllByText("Health History")).toBeTruthy;
        expect(screen.findAllByText("Please describe any current diagnosis.")).toBeTruthy;
        expect(screen.findAllByText("Please describe any hospitalizations in the last 5 years.")).toBeTruthy;
        expect(screen.findAllByText("Please describe your health habits.")).toBeTruthy;
    })
})



